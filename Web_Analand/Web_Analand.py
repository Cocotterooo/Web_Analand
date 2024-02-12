import reflex as rx

from Web_Analand.styles import styles
from Web_Analand.styles.colors import Color, TextColor
from Web_Analand.styles.styles import Size
from Web_Analand.styles.fonts import Font

from Web_Analand.views.navbar import top_navbar
from Web_Analand.views.server_state import server_state

class State(rx.State):
    """The app state."""

    pass


def index() -> rx.Component:
    return rx.box(
        top_navbar("rgba(0, 0, 0, 0.5)"),
        rx.flex(
            rx.span(
                "BIENVENIDO A ",
                letter_spacing="0.1em",
                font_size=Size.LARGE.value,
                color="white",
                font_family=Font.TITLE.value,
                font_weight="300"
            ),
            rx.span(
                "ANALAND SUPER™",
                letter_spacing="0.1em",
                font_size=Size.LARGE.value,
                color="white",
                font_family=Font.TITLE.value,
                font_weight="400"
            ),
            rx.span(
                "TU DIVERSIÓN ES NUESTRA PASIÓN EN CADA DETALLE",
                text_align="center",
                margin_top=Size.BIG.value,
                letter_spacing="0.1em",
                font_size=Size.BIG.value,
                color="white",
                font_family=Font.TITLE.value,
                font_style="italic",
                font_weight="200"
            ),
            server_state(),
            direction="column",     # Sets the direction of main axis to column
            align="center",         # Centers along the cross axis (horizontal centering)
            justify="center",       # Centers along the main axis (vertical centering)
            width="100%",           # Use 100% width if you want to center in the viewport
            height="100vh",         # Use 100vh for full viewport height
        ),
        rx.image(
            src="/galeria/cueva_elevador.png",
            width="100%",
            height="100%",
            object_fit="cover",
            position="fixed",
            top="0",
            left="0",
            z_index="-1"
        ),
        background_color= "rgba(0, 0, 0, 0.7)",
        width="100%",
        height= "100vh"
    )


# Create app instance and add index page.
app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE
)
app.add_page(index)
