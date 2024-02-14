import reflex as rx

config = rx.Config(
    app_name="Web_Analand",
    api_url="http://api.analand.net",
    cors_allowed_origins=[ # Add the origins that are allowed to access the API
        "http://localhost:3000",
        "https://analand.net",
        "https://web-analand.vercel.app"
        "https://web-analand-ewbvxwt7f-manuels-projects-f077ea90.vercel.app"
    ],
)
