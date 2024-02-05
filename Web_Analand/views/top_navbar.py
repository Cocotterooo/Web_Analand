import reflex as rx

from Web_Analand.styles.styles import Size
from Web_Analand.styles.colors import Color
from Web_Analand.styles.colors import TextColor

def top_navbar() -> rx.Component:
    return rx.box(
        rx.flex(
            rx.input(
                placeholder= "Buscar",
                background_color= Color.PRIMARY.value,
                border_radius= Size.BIG.value,
                shadow= "lg",
                width= "25%"
            ),
            rx.spacer(),
            rx.button(
                "Iniciar sesión",
                _hover={
                    "background_color": TextColor.PRIMARY.value,
                    "color": Color.PRIMARY.value,
                },
                background_color= Color.PRIMARY.value,
                color= TextColor.PRIMARY.value,
                border= f"1px solid {TextColor.PRIMARY.value}",
                border_radius= Size.SMALL.value,
                shadow= "lg",
                transition= "0.5s",
            ),
            width= "100%"
        ),
        position= "sticky",
        bg= Color.SECONDARY.value,
        z_index= "999",
        shadow= Size.SMALL.value,
        padding= Size.SMALL.value,
        margin_top= Size.SMALL.value,
        margin_right= Size.SMALL.value,
        border_radius= Size.SMALL.value
    )