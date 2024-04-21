import reflex as rx
from Web_Analand.state.PageState import PageState

def status_badge_server()->rx.components:
    return rx.box(
        rx.cond(
            (PageState.server_status == 'online'),
            rx.badge(
                "Conectado", 
                variant="solid", 
                color_scheme="jade"
            ),
            rx.cond(
                (PageState.server_status == 'offline'),
                rx.badge(
                    "Desconectado", 
                    variant="solid", 
                    color_scheme="red"
                ),
                rx.cond(
                    (PageState.server_status == 'starting'),
                    rx.badge(
                        "Encendiendo...", 
                        variant="solid", 
                        color_scheme="tomato",
                        class_name="blink1_5"
                    ),
                    rx.cond(
                        (PageState.server_status == 'desconocido'),
                        rx.badge(
                            "Desconocido", 
                            variant="solid", 
                            color_scheme="gray",
                            class_name="blink2"
                        )
                    )
                )
            )
        ),
        on_mount= PageState.get_server_status
    )