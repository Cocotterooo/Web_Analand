import reflex as rx

from Web_Analand.styles.styles import Size
from Web_Analand.styles.colors import TextColor
from Web_Analand.styles.fonts import Font

def logotipo() -> rx.components:
    return rx.link(
        rx.hstack(
            rx.image(
                src= "/logotipo.svg",
                alt= '''Logotipo de Analand Super formando un cuadrado a su vez
                    formado por cuatro cuadrados amarillos en distintas tonalidades, 
                    con la letra 'A' mezclada con una N hecha con la transparencia de los cuadrados del logotipo''',
                width= Size.LARGE.value,
                height= "auto",
                margin_bottom= "0.05em"
            ),
            rx.vstack(
                rx.text(
                    "ANALAND",
                    trim= "both",
                ),
                rx.text(
                    "SUPER",
                    trim= "both",
                ),
                spacing= "2",
                width= "auto"
            ),
            
            align= "center",
        ),
        href= "/",
        width= Size.BIG.value,   
        color= TextColor.PRIMARY.value,
        font_size= Size.BIG.value,
        _hover= {
            "underline": "none",
        }
    )