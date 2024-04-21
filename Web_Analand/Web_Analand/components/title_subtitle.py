import reflex as rx
from Web_Analand.styles.styles import Size
from Web_Analand.styles.fonts import Font, FontWeight
from Web_Analand.styles.colors import TextColor

def title(text:str = 'Hello World', color:str = TextColor.PRIMARY.value) -> rx.components:
    return rx.text(
        text, 
        font_family=Font.TITLE.value,
        font_weight=FontWeight.MEDIUM.value,
        letter_spacing='0.1em',
        font_size=Size.LARGE.value,
        color=color
    )

def subtitle(text:str = 'Hello World', color:str = TextColor.PRIMARY.value) -> rx.Component:
    return rx.text(
        text,
        font_family=Font.TITLE.value,
        font_weight=FontWeight.LIGHT.value,
        font_style='italic',
        letter_spacing='0.1em',
        text_align='center',
        font_size=Size.MEDIUM.value,
        color=color,
    )