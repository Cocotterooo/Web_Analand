import reflex as rx

from Web_Analand.styles.styles import Size, Color
# Motion
from Web_Analand.components.motion.motion import motion

def icon_link(src:str, alt:str, href:str) -> rx.components:
    return rx.link(
        motion(
            rx.image(
                src= src,
                alt= alt,
                height= Size.BIG.value, 
                width= 'auto'
            ),
            while_hover={"scale": 1.3},
            transition={"duration": 0.2},
        ),
        href= href,
        is_external= True
    )