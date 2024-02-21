import reflex as rx

from Web_Analand.styles.styles import Size 
from Web_Analand.styles.colors import Color, TextColor
from Web_Analand.styles.fonts import FontWeight

def server_state(title:str, server_ip:str)->rx.components:
    return rx.chakra.button( 
        rx.chakra.vstack(
            rx.chakra.hstack(
                rx.lucide.icon(
                    "server",
                    style={
                        "width": Size.LARGE.value, 
                        "height": Size.LARGE.value
                    },
                    color=Color.TERCIARY.value
                ),
                rx.chakra.text(
                    title, 
                    font_size=Size.DEFAULT.value, 
                    color=TextColor.PRIMARY.value
                ),
                width="100%",
                padding_bottom=Size.SMALL.value
            ),
            rx.chakra.hstack(
                rx.lucide.icon(
                    "power",
                    color=TextColor.SECONDARY.value
                ),
                rx.chakra.span(
                    "Estado:",
                    color=TextColor.SECONDARY.value,
                    font_weight= FontWeight.LIGHT_EXTRA.value
                ),
                #rx.chakra.badge(
                #    "Conectado", variant="solid", color_scheme="green"
                #),
                rx.chakra.badge(
                    "Desconectado", variant="solid", color_scheme="red"
                ),
                #rx.chakra.badge(
                #    "Encendiendo...", variant="solid", color_scheme="yellow"
                #),
                padding_left=Size.DEFAULT.value
            ),
            rx.chakra.hstack(
                rx.lucide.icon(
                    "user-round",
                    color=TextColor.SECONDARY.value
                ),
                rx.chakra.span(
                    "Jugadores:",
                    color=TextColor.SECONDARY.value,
                    font_weight= FontWeight.LIGHT_EXTRA.value
                ),
                rx.chakra.span(
                    "0",
                    color= Color.ACCENT.value
                ),
                padding_left=Size.DEFAULT.value
            ),
            rx.chakra.hstack(
                rx.lucide.icon(
                    "activity",
                    color=TextColor.SECONDARY.value
                    ),
                rx.chakra.span(
                    "Actividad:",
                    color=TextColor.SECONDARY.value,
                    font_weight= FontWeight.LIGHT_EXTRA.value
                ),
                rx.chakra.span(
                    "0%",
                    color= Color.ACCENT.value
                ),
                padding_left=Size.DEFAULT.value
            ),
            width="100%",
            align_items="start"   
        ),
        background_color= "rgba(0, 0, 0, 0.3)",
        padding=Size.DEFAULT.value,
        padding_right=Size.MEDIUM.value,
        width="15%",
        height="auto",
        border_radius=Size.SMALL.value,
        border=f"2px solid {Color.ACCENT.value}",
        on_click=rx.set_clipboard(server_ip),
        _hover={
            "background_color": "rgba(0, 0, 0, 0.65)"
        },
        transition= "1s"
    )