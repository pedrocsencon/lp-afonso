import { StaticImageData } from "next/image"

export type WeekInfoBulletProps = {
    url: StaticImageData
    text: string
    pos: 'right' | 'left' | 'last'
    week: string
}