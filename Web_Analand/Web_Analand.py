from rxconfig import config
import reflex as rx

from Web_Analand.styles import styles

from Web_Analand.views.news_box import news_box
from Web_Analand.views.top_navbar import top_navbar
from Web_Analand.views.side_navbar import side_navbar


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.box(
        rx.flex(
            side_navbar(),
            rx.stack(
                top_navbar(),
                news_box(),
                direction="column",
                width="100%"
            ),
            direction="row",
            height= "100%"
        ),
        style={
            # linear-gradient(0deg, rgba(243, 234, 255) 0%, rgba(255, 222, 139) 68%, rgba(255, 209, 93) 100%
            "background_image": "linear-gradient(0deg, rgba(243, 234, 255) 0%, rgba(159, 122, 214) 68%, rgba(106, 57, 176) 100%)",
            "background_size": "cover",
            "background_repeat": "no-repeat",
            "background_attachment": "fixed",
            "background_position": "bottom",
            "width": "100vw",
            "height": "100vh"
        }
    )

app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE
)
app.add_page(index)
