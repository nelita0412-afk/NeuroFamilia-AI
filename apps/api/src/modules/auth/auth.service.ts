import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly db: DatabaseService) {}

  async register(data: RegisterDto) {
    const passwordHash = await bcrypt.hash(data.password, 10);

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
        accountId: account.id,
      },
    });

    return {
      id: account.id,
      email: account.email,
      message: 'Usuario creado correctamente',
    };
  }
}
