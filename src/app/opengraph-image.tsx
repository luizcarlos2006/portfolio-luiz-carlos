import { ImageResponse } from 'next/og';
import { perfil } from '@/data/perfil';

export const alt = `${perfil.nomeCurto} — ${perfil.cargo}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Imagem() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, background: '#f6faf8', color: '#0f1f1a' }}>
        <div style={{ fontSize: 28, color: '#0f766e', marginBottom: 24 }}>{perfil.cidade}</div>
        <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.05 }}>{perfil.nomeCurto}</div>
        <div style={{ fontSize: 44, marginTop: 20, color: '#4a5d55' }}>{perfil.cargo}</div>
        <div style={{ marginTop: 56, height: 8, width: 160, background: '#0f766e', borderRadius: 4 }} />
      </div>
    ),
    size,
  );
}
