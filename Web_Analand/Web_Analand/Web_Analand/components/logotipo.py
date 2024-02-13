import reflex as rx

from Web_Analand.styles.styles import Size
from Web_Analand.styles.colors import TextColor
from Web_Analand.styles.fonts import Font

def logotipo() -> rx.Component:
    return rx.link(
        rx.hstack(
            rx.image(
                src= "/logotipo.svg",
                alt= '''Logotipo de Analand Super formado por un cuadrado a su vez
                    formado por cuatro cuadrados amarillos en distintas tonalidades, 
                    con la letra A mezclada con una N hecha con la transparencia de los cuadrados del logotipo''',
                width= Size.LARGE.value,
                height= "auto",
                margin_bottom= "0.05em"
            ),
            rx.heading(
                "ANALAND SUPER",
                font_size= "lg",
                fontFamily= Font.TITLE.value,
                fontWeight= "bold"
            ),
        ),
        href= "/",
        width= "10%",   
        color= TextColor.PRIMARY.value,
        font_size= Size.BIG.value,
        margin= Size.TINY.value,
        margin_left= Size.SMALL.value,
        _hover= {
            "underline": "none",
        }
    )