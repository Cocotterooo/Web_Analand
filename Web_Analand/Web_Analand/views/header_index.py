import reflex as rx
from Web_Analand.styles.styles import Size
from Web_Analand.styles.fonts import Font

from Web_Analand.components.server_state_card import server_state
from Web_Analand.components.discord_card import discord_card

def header_index() -> rx.component:    
    return rx.flex(
        rx.span(
            "BIENVENIDO A ",
            letter_spacing="0.1em",
            font_size=Size.LARGE.value,
            color="white",
            font_family=Font.TITLE.value,
            font_weight="300"
        ),
        rx.span(
            "ANALAND SUPER™",
            letter_spacing="0.1em",
            font_size=Size.LARGE.value,
            color="white",
            font_family=Font.TITLE.value,
            font_weight="400"
        ),
        rx.span(
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
        rx.hstack(
            server_state(),
            discord_card(),
            margin_top="10%",
            justify="center",  
            spacing=Size.LARGE.value,
            width="100%"
        ),
        direction="column",     # Sets the direction of main axis to column
        align="center",         # Centers along the cross axis (horizontal centering)
        justify="center",       # Centers along the main axis (vertical centering)
        width="100%",           # Use 100% width if you want to center in the viewport
        height="100vh"         # Use 100vh for full viewport height
    )