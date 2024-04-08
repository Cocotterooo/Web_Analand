import reflex as rx
from Web_Analand.styles.styles import Size
from Web_Analand.styles.fonts import Font

from Web_Analand.components.server_state_card import server_state
from Web_Analand.components.discord_card import discord_card
from Web_Analand.constants import SERVER_IP_PRIMARY, DISCORD_URL

def header_index() -> rx.components:    
    return rx.flex(
        rx.text(
            "BIENVENIDO A ",
            text_align="center",
            letter_spacing="0.1em",
            font_size=Size.LARGE.value,
            color="white",
            font_family=Font.TITLE.value,
            font_weight="300"
        ),
        rx.text(
            "ANALAND SUPER™",
            text_align="center",
            letter_spacing="0.1em",
            font_size=Size.LARGE.value,
            color="white",
            font_family=Font.TITLE.value,
            font_weight="400"
        ),
        rx.text(
            "TU DIVERSIÓN, ES NUESTRA PASIÓN EN CADA DETALLE",
            text_align="center",
            margin_top=Size.BIG.value,
            letter_spacing="0.1em",
            font_size=Size.BIG.value,
            color="white",
            font_family=Font.TITLE.value,
            font_style="italic",
            font_weight="200"
        ),
        rx.flex(
            server_state(SERVER_IP_PRIMARY, SERVER_IP_PRIMARY),
            discord_card("Nuestro Discord", DISCORD_URL),
            width= "100%",
            margin_top= "8%",
            justify= "center",
            spacing= '4',
            flex_direction= ["column", "row"]
        ),
        padding= Size.DEFAULT.value,
        direction="column",     # Sets the direction of main axis to column
        align="center",         # Centers along the cross axis (horizontal centering)
        justify="center",       # Centers along the main axis (vertical centering)
        width="100%",           # Use 100% width if you want to center in the viewport
        height="85vh"           # Use 85vh for full viewport height
    )