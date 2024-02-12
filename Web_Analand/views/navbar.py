import reflex as rx

# Styles:
from Web_Analand.styles.styles import Size, navBar_link
from Web_Analand.styles.colors import Color
from Web_Analand.styles.fonts import FontWeight
from Web_Analand.styles.colors import TextColor
# Components:
from Web_Analand.components.logotipo import logotipo
from Web_Analand.components.link_buttom_navbar import link_buttom_navbar

def top_navbar(background_color:str=Color.SECONDARY.value) -> rx.Component:
    return rx.hstack(
        logotipo(),
        rx.spacer(),
        rx.hstack(
            link_buttom_navbar("Inicio", "/"),
            link_buttom_navbar("Blog", "/"),
            link_buttom_navbar("Tienda", "/"),
            link_buttom_navbar("Reglas", "/"),
            link_buttom_navbar("Soporte", "/"),
            link_buttom_navbar("Nosotros", "/"),
            rx.link(
                "Iniciar Sesión",
                href= "/",
                style= navBar_link,
                fontWeight= FontWeight.LIGHT.value,
                border= f"1px solid {TextColor.SECONDARY.value}",
                border_radius= Size.TINY.value,
                padding_x= Size.TINY.value,
                margin_left= Size.BIG.value,
                _hover= {
                    "color": TextColor.ACCENT.value,
                    "border": f"1px solid {TextColor.ACCENT.value}",
                }
            ),
            spacing= Size.BIG.value
        ),
        border_top= f"1px solid {Color.ACCENT.value}",
        bg=background_color,
        position="sticky",
        padding_right=Size.BIG.value,
        padding_y=Size.TINY.value,
        z_index="999",
        top="0",
        width="100%"
    )
