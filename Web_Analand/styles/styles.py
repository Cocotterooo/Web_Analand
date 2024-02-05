import reflex as rx
from enum import Enum

from .fonts import Font, FontWeight
from .colors import TextColor, Color

STYLESHEETS = [
    # FUENTE:
    "https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap", # Normal
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap" # Titulos
]

class Size(Enum):
    ZERO = "0px !important"
    SMALL = "0.6em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    BIG = "1.5em"
    LARGE = "2em"
    EXTRA_LARGE = "5em"


BASE_STYLE = {
    "font_size": "16px",
    "font_family": Font.DEFAULT.value,
    "font_weight": FontWeight.LIGHT.value,
    "color": TextColor.PRIMARY.value,
    #"background_color": Color.BACKGROUND.value,
    #"backgroundImage": "linear-gradient(0deg, rgba(242,243,172,1) 30%, rgba(249,224,86,1) 100%)"
    #'background': 'linear-gradient(rgba(242,243,172,1), rgba(249,224,86,1))'
    #"background":"radial-gradient(circle at 22% 11%,rgba(62, 180, 137,.20),hsla(0,0%,100%,0) 19%),radial-gradient(circle at 82% 25%,rgba(33,150,243,.18),hsla(0,0%,100%,0) 35%),radial-gradient(circle at 25% 61%,rgba(250, 128, 114, .28),hsla(0,0%,100%,0) 55%)"
}

