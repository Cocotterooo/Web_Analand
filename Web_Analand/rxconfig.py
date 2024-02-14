import reflex as rx

config = rx.Config(
    app_name="Web_Analand",
    cors_allowed_origins=[ # Add the origins that are allowed to access the API
        "http://localhost:3000",
        "https://analand.net",
        "https://web-analand-kjfs9ce06-manuels-projects-f077ea90.vercel.app"
    ],
)
