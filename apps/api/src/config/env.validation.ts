const REQUIRED_ENV_VARS = ['DATABASE_URL', 'JWT_SECRET', 'GEMINI_API_KEY', 'GEMINI_MODEL'] as const;

export function validateEnv(config: Record<string, unknown>) {
  // Valida variables criticas al iniciar para fallar rapido ante configuraciones incompletas.
  for (const key of REQUIRED_ENV_VARS) {
    if (!config[key] || typeof config[key] !== 'string') {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }

  return config;
}