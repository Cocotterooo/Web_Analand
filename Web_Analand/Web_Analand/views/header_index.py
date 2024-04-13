# region Imports
import reflex as rx
from Web_Analand.styles.styles import Size, title_big

from Web_Analand.components.server_state_card import server_state
from Web_Analand.components.discord.discord_card import discord_card
from Web_Analand.constants import SERVER_IP_PRIMARY, DISCORD_URL


def header_index() -> rx.components:    
    return rx.vstack(
        rx.vstack(
            rx.text(
                "BIENVENIDO A ",
                font_weight= "300",
                style= title_big
            ),
            rx.text(
                "ANALAND SUPER™",
                font_weight= "400",
                style= title_big
            ),
            rx.text(
                "TU DIVERSIÓN, ES NUESTRA PASIÓN EN CADA DETALLE",
                margin_top= Size.BIG.value,
                font_weight= "200",
                style= title_big,
                font_style= "italic",
                font_size= Size.BIG.value,
            ),
            color= "white",
            align= "center",
            justify= "center",
        ),
        rx.tablet_and_desktop(
            rx.flex(
                server_state(SERVER_IP_PRIMARY, SERVER_IP_PRIMARY),
                discord_card("Nuestro Discord", DISCORD_URL),
                margin_top= Size.EXTRA_LARGE.value,
                justify= "center",
                spacing= '4',
            ),
        ),
        rx.mobile_only(
            server_state(SERVER_IP_PRIMARY, SERVER_IP_PRIMARY),
            margin_top= Size.LARGE.value,
        ),
        padding= Size.DEFAULT.value,
        direction= "column",     # Sets the direction of main axis to column
        align= "center",         # Centers along the cross axis (horizontal centering)
        justify= "center",       # Centers along the main axis (vertical centering)
        width= "100%",           # Use 100% width if you want to center in the viewport
        height= "85vh"           # Use 85vh for full viewport height
    )