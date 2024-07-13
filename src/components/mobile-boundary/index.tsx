'use client'

import useMediaQuery from '@/hooks'

export default function MobileBoundary({ children }: React.PropsWithChildren<{}>) {
    const isMobile = useMediaQuery('(max-width: 768px)')

    if (isMobile) {
        return children
    }

    return (
        <div>
            <p>Questa applicazione funziona solo su cellulare o tablet</p>
        </div>
    )
}
