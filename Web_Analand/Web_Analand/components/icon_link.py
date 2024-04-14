import reflex as rx

from Web_Analand.styles.styles import Size, Color

def icon_link(src:str, alt:str, href:str) -> rx.components:
    return rx.link(
        rx.image(
            src= src,
            alt= alt,
            height= Size.BIG.value, 
            width= "auto"
        ),
        href= href,
        is_external= True,
        class_name= "primary_color_svg",
        _hover={
            "class-name": "accent_color_svg"
        },
    )