import reflex as rx
from enum import Enum

from .fonts import Font, FontWeight
from .colors import TextColor, Color

STYLESHEETS = [
    # FUENTE:
    "https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap", # Normal
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap", # Titulos
    "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" # Titulos
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
}

navBar_link = dict(
    fontFamily= Font.TITLE.value,
    letter_spacing= "0.05em",
    fontWeight= "250",
    color= TextColor.SECONDARY.value,
    font_size= Size.MEDIUM.value,
    transition= "0.4s",
    _hover= {
        "underline": "none",
        "color": TextColor.PRIMARY.value,
    },
)

