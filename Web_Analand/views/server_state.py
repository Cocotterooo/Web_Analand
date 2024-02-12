import reflex as rx

from Web_Analand.styles.styles import Size 
from Web_Analand.styles.colors import Color, TextColor
from Web_Analand.styles.fonts import FontWeight

def server_state()->rx.Component:
    return rx.button( 
        rx.vstack(
            rx.hstack(
                rx.lucide.icon(
                    "server",
                    style={
                        "width": Size.LARGE.value, 
                        "height": Size.LARGE.value
                    },
                    color=Color.TERCIARY.value
                ),
                rx.text(
                    "analand.net", 
                    font_size=Size.DEFAULT.value, 
                    color=TextColor.PRIMARY.value
                ),
                width="100%",
                padding_bottom=Size.SMALL.value
            ),
            rx.hstack(
                rx.lucide.icon(
                    "power",
                    color=TextColor.SECONDARY.value
                ),
                rx.span(
                    "Estado:",
                    color=TextColor.SECONDARY.value,
                    font_weight= FontWeight.LIGHT_EXTRA.value
                ),
                #rx.badge(
                #    "Conectado", variant="solid", color_scheme="green"
                #),
                rx.badge(
                    "Desconectado", variant="solid", color_scheme="red"
                ),
                #rx.badge(
                #    "Encendiendo...", variant="solid", color_scheme="yellow"
                #),
                padding_left=Size.DEFAULT.value
            ),
            rx.hstack(
                rx.lucide.icon(
                    "user-round",
                    color=TextColor.SECONDARY.value
                ),
                rx.span(
                    "Jugadores:",
                    color=TextColor.SECONDARY.value,
                    font_weight= FontWeight.LIGHT_EXTRA.value
                ),
                rx.span(
                    "0",
                    color= Color.ACCENT.value
                ),
                padding_left=Size.DEFAULT.value
            ),
            rx.hstack(
                rx.lucide.icon(
                    "activity",
                    color=TextColor.SECONDARY.value
                    ),
                rx.span(
                    "Actividad:",
                    color=TextColor.SECONDARY.value,
                    font_weight= FontWeight.LIGHT_EXTRA.value
                ),
                rx.span(
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
        margin_top="10%",
        width="auto",
        height="auto",
        border_radius=Size.SMALL.value,
        border=f"1px solid {Color.ACCENT.value}",
        on_click=rx.set_clipboard("analand.net"),
        _hover={
            "background_color": "rgba(0, 0, 0, 0.5)"
        },
        transition= "1s"
    )