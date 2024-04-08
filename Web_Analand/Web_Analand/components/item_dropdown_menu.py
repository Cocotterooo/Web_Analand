import reflex as rx

from Web_Analand.styles.colors import TextColor, Color

def item_dropdown_menu(title:str, href:str, icon:str, alt:str) -> rx.components:
    return rx.link(
        rx.hstack(
            rx.image(
                src=icon,
                height="auto",
                alt=alt
            ),
            rx.text(title),
            align="center",
        ),
        href= href,
        style= {
            "color": TextColor.SECONDARY.value,
            "_hover": {
                "color": TextColor.ACCENT.value,
            }
        }
    )