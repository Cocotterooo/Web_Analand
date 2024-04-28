import reflex as rx

config = rx.Config(
    app_name='Web_Analand',
    backend_port=1502,
    cors_allowed_origins=[ # Add the origins that are allowed to access the API
        'http://localhost:3000',
        'https://analand.net',
        '185.249.197.109:1502'
    ]
)
