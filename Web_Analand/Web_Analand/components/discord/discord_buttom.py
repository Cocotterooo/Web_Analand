import reflex as rx

# Styles:
from Web_Analand.styles.styles import Size
from Web_Analand.styles.colors import Color

def discord_buttom(invitation:str) -> rx.components:
    return rx.box(
        rx.link(
            rx.image(
                src= '/icons/social/discord-logo-white.svg',
                height= 'auto',
                width= Size.EXTRA_LARGE.value,
                alt= 'Botón de Discord'
            ),
            href=invitation,
        ),
        background_color= Color.DISCORD.value,
        padding= Size.SMALL.value,
        border_radius= Size.TINY.value,
        align= 'center',
    )