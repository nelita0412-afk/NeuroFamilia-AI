import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PersonRole, Prisma } from '@prisma/client';
import { DatabaseService } from '../../database/database.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { Role } from './enums/role.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const passwordHash = await bcrypt.hash(data.password, 10);

    try {
      const account = await this.db.account.create({
        data: {
          email: data.email,
          passwordHash,
        },
      });

      await this.db.person.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          role: data.role ?? PersonRole.TUTOR,
          accountId: account.id,
        },
      });

      return {
        id: account.id,
        email: account.email,
        message: 'Usuario creado correctamente',
      };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException('El correo electrónico ya está registrado.');
      }
      throw error;
    }
  }

  async login(data: LoginDto) {
    const account = await this.db.account.findUnique({
      where: { email: data.email },
    });

    if (!account) {
      throw new UnauthorizedException('Credenciales inválidas.');
    }

    const isPasswordValid = await bcrypt.compare(data.password, account.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas.');
    }

    const payload = { sub: account.id, email: account.email, role: Role.USER };
    const accessToken = await this.jwtService.signAsync(payload);

    return {
      access_token: accessToken,
    };
  }
}
