import reflex as rx

from Web_Analand.styles.styles import Size
from Web_Analand.styles.colors import Color
from Web_Analand.styles.colors import TextColor

from Web_Analand.components.link_button_side_navbar import link_navbar_side

def side_navbar() -> rx.Component:
    return rx.vstack(
        rx.box(
            rx.center(
                rx.hstack(
                    rx.image(
                        src= "/analand_logo4.svg",
                        width= Size.EXTRA_LARGE.value,
                    ),
                    rx.heading(
                        "ANALAND SUPER",
                        size= "lg",
                        color= TextColor.WHITE.value
                    ),
                    padding= Size.MEDIUM.value,
                    justify_content= "center",
                    width= "30%",
                    bg= Color.BACKGROUND.value,
                ),
            ),
            padding= Size.MEDIUM.value,
            bg= Color.BACKGROUND.value,
            border_top_left_radius= Size.SMALL.value,
            border_top_right_radius= Size.SMALL.value,
            border_bottom = f"4px solid {TextColor.PRIMARY.value}",
        ),
        link_navbar_side(
            "arrow_right", 
            "Inicio", 
            "/"
        ),
        link_navbar_side(
            "star", 
            "Tienda", 
            "/"
        ),
        link_navbar_side(
            "email", 
            "Reportes", 
            "/"
        ),
        link_navbar_side(
            "calendar", 
            "Reglas", 
            "/"
        ),
        position= "left",
        bg= Color.SECONDARY.value,
        margin=Size.SMALL.value,
        shadow= "lg",
        border_radius= Size.SMALL.value,
        spacing= Size.ZERO.value,
    )