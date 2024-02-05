import reflex as rx

from Web_Analand.styles.styles import Size
from Web_Analand.styles.colors import Color
from Web_Analand.styles.colors import TextColor

def news_box() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(
                "Noticias",
                size= "lg",          
                color= TextColor.SECONDARY.value,
                padding= Size.MEDIUM.value,
            ),
            bg= Color.SECONDARY.value,
            border_radius= Size.SMALL.value,
            width= "80%"
        ),
        height= "100%"
    )