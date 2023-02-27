import { GooglePixel } from '@/components/Pixels/GooglePixel'
import { theme } from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/global.css'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
        <GooglePixel/>
        <Component {...pageProps} />
        </QueryClientProvider>
    </ChakraProvider>
  )
}
