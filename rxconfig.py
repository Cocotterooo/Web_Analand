import reflex as rx

config = rx.Config(
    app_name="Analand Super",
    cors_allowed_origins=[ # Add the origins that are allowed to access the API
        "http://localhost:3000",
        "https://analand.net"
    ],
)