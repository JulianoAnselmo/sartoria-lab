import { describe, it, expect } from 'vitest';
import { briefingSchema } from '../src/lib/briefing';

describe('briefingSchema', () => {
  it('accepts a minimal valid payload', () => {
    const result = briefingSchema.safeParse({
      nome: 'Juliano',
      email: 'juliano@exemplo.com',
      mensagem: 'Preciso de um site sob medida pro meu ateliê.',
    });
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const result = briefingSchema.safeParse({ nome: 'A', email: 'nao-email', mensagem: 'oi' });
    expect(result.success).toBe(false);
  });

  it('requires mensagem of at least 10 chars', () => {
    const result = briefingSchema.safeParse({ nome: 'A', email: 'a@b.com', mensagem: 'curto' });
    expect(result.success).toBe(false);
  });
});
