import reflex as rx
from enum import Enum

from .fonts import Font, FontWeight
from .colors import TextColor, Color

# Constants:
MAX_WIDTH = "650px"


STYLESHEETS = [
    # FUENTE:
    "https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap", # Normal
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap", # Titulos
    "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap", # Titulos
    "/css/styles.css"
]

class Size(Enum):
    ZERO = "0px !important"
    TINY = "0.3em"
    SMALL = "0.6em"
    MEDIUM_SMALL = "0.8em"
    DEFAULT = "1em"
    MEDIUM = "1.2em"
    BIG = "1.5em"
    LARGE = "2em"
    EXTRA_LARGE = "5em"


BASE_STYLE = {
    "font_size": "16px",
    "font_family": Font.DEFAULT.value,
    "font_weight": FontWeight.LIGHT.value,
    "color": TextColor.PRIMARY.value,
    "::selection": {
        "background_color": "rgba(255, 204, 0, 0.3)",
    },
    # Rx Components Styles:
    rx.menu.item: {
        "color": TextColor.SECONDARY.value,
    },
    rx.menu.separator: {
        "border": f"1px solid {Color.ACCENT.value}",
    },
    rx.menu.content: {
        "background_color": Color.PRIMARY.value,
        "border": f"2px solid {Color.SECONDARY.value}"
    },
    rx.hover_card.content: {
        "font_size": Size.MEDIUM_SMALL.value,
        "color": TextColor.PRIMARY.value,
        "background_color": Color.PRIMARY.value,
        "border": f"2px solid {Color.SECONDARY.value}",
        "border_right": f"2px solid {Color.ACCENT.value}",
        "width": "100%",
        "align": "center",
        "padding": Size.DEFAULT.value
    }
}


# Custom Components Styles:

navBar_link = dict(
    fontFamily= Font.TITLE.value,
    letter_spacing= "0.05em",
    fontWeight= "350",
    color= TextColor.SECONDARY.value,
    font_size= Size.MEDIUM.value,
    transition= "0.4s",
    _hover= {
        "underline": "none",
        "color": TextColor.PRIMARY.value,
    },
)


# Styles for the index page:
# Title and Subtitle:
title_big = dict(
    letter_spacing= "0.1em",
    font_size= Size.LARGE.value,
    font_family= Font.TITLE.value,
    text_align= "center"
)
# Card server infor and discord info:
card_info_index = dict(
    _hover={
        "background_color": "rgb(0 0 0 / 65%)",
        "cursor": "pointer"
    },
    transition= "1s",
    background_color= "rgb(0 0 0 / 30%)",
    border= f"2px solid {Color.ACCENT.value}",
    border_radius= Size.SMALL.value,
    padding_y= Size.DEFAULT.value,
    height= "100%"
)
