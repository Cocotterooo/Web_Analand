import reflex as rx

from Web_Analand.styles.styles import Size 
from Web_Analand.styles.colors import Color, TextColor
from Web_Analand.styles.fonts import FontWeight


DISCORD_COLOR = "#5865F2"

def discord_card(title:str, invitation_url:str)->rx.components:
    return rx.link(
        rx.vstack(
            rx.hstack(
                rx.image(
                    src="/icons/discord.svg",
                    style={
                        "width": Size.LARGE.value,
                        "height": Size.LARGE.value
                    },
                    color= DISCORD_COLOR
                ),
                rx.text(
                    "Nuestro Discord",
                    font_size= Size.DEFAULT.value,
                    color= TextColor.PRIMARY.value
                ),
                width= "100%",
                padding_bottom= Size.SMALL.value,
                align_items="center"
            ),
            rx.hstack(
                rx.lucide.icon(
                    "user-round",
                    color= TextColor.SECONDARY.value
                ),
                rx.text(
                    "Usuarios:",
                    color= TextColor.SECONDARY.value,
                    font_weight= FontWeight.LIGHT_EXTRA.value
                ),
                rx.text(
                    "0",
                    color= DISCORD_COLOR
                ),
                padding_left= Size.DEFAULT.value
            ),
            rx.hstack(
                rx.lucide.icon(
                    "activity",
                    color= TextColor.SECONDARY.value
                    ),
                rx.text(
                    "Online:",
                    color= TextColor.SECONDARY.value,
                    font_weight= FontWeight.LIGHT_EXTRA.value
                ),
                rx.text(
                    "0",
                    color= DISCORD_COLOR
                ),
                padding_left= Size.DEFAULT.value
            ),
            width= "100%",
            align_items= "start"
        ),
        href= "https://discord.gg/pZQMW64sYT",
        is_external= True,
        background_color= "rgba(0, 0, 0, 0.3)",
        padding= Size.DEFAULT.value,
        padding_right= Size.MEDIUM.value,
        min_width= "15%",
        height= "100%",
        border_radius= Size.SMALL.value,
        border= f"2px solid {DISCORD_COLOR}",
        _hover={
            "background_color": "rgba(0, 0, 0, 0.65)"
        },
        transition= "1s"
    )