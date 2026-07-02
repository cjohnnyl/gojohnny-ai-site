import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'GoJohnny AI — Coach de corrida com IA no WhatsApp'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D0D0D',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            color: '#DAFF00',
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}
        >
          GoJohnny AI
        </div>
        <div
          style={{
            color: '#F4F2EE',
            fontSize: '58px',
            fontWeight: 800,
            textAlign: 'center',
            lineHeight: 1.1,
            maxWidth: '900px',
          }}
        >
          Seu coach de corrida está no WhatsApp.
        </div>
        <div
          style={{
            color: '#6B6B6B',
            fontSize: '22px',
            marginTop: '36px',
            letterSpacing: '0.02em',
          }}
        >
          Sem app. Sem humano. R$39,90/mês.
        </div>
        <div
          style={{
            marginTop: '52px',
            background: '#DAFF00',
            color: '#0D0D0D',
            padding: '14px 36px',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: 700,
          }}
        >
          Entre na lista de espera
        </div>
      </div>
    ),
    { ...size },
  )
}
