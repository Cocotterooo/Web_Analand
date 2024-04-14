import reflex as rx

# Constants:
from Web_Analand.constants import GITHUB_REPO, DISCORD_URL, INSTAGRAM_URL
from Web_Analand.styles.styles import Size, Color, TextColor
# Components:
from Web_Analand.components.icon_link import icon_link

# region STATIC
def footer() -> rx.components:
    return rx.vstack(
        rx.hstack(
            icon_link(
                src= "/icons/social/discord.svg",
                alt= "Logotipo de Discord",
                href= DISCORD_URL
            ),
            icon_link(
                src="/icons/social/instagram.svg", 
                alt= "Logotipo de Instagram",
                href= INSTAGRAM_URL
            ),
            icon_link(
                src="/icons/social/x.svg", 
                alt= "Logotipo de Instagram",
                href= INSTAGRAM_URL
            ),
            icon_link(
                src= "/icons/social/github.svg",
                alt= "Logotipo de Github",
                href= GITHUB_REPO
            ),
            spacing= "3",
            align= "center",
            justify= "center",
            padding_bottom= Size.LARGE.value,
        ),
        rx.image(
            src= "/logotipo.svg",
            alt= "Logo de ANALAND SUPER",
            height= Size.EXTRA_LARGE.value,
            width= "auto",
            align= "center"
        ),
        rx.text(
            "© 2024 Analand Super. by Cocoterooo",
            font_size= Size.MEDIUM_SMALL.value,
            color= TextColor.SECONDARY.value,
            align= "center",
            padding= Size.SMALL.value
        ),
        rx.link(
            rx.hstack(
                rx.image(
                    src= "/icons/social/github.svg",
                    alt= "Logo de Discord",
                    height= "2em",
                    padding_right= Size.SMALL.value
                ),
                rx.text(
                    "BUILDING SOFTWARE WITH <3 FROM GALICIA",
                    font_size= Size.MEDIUM_SMALL.value,
                    color= TextColor.SECONDARY.value,
                    padding_right= Size.LARGE.value
                    
                ),
                align= "center"
            ),
            href= GITHUB_REPO
        ),
        border_top= f"1px solid {Color.SECONDARY.value}",
        margin_top= Size.EXTRA_LARGE.value,
        padding_top= Size.LARGE.value,
        padding_bottom= Size.EXTRA_LARGE.value,
        width= "100%",
        align= "center"
    )