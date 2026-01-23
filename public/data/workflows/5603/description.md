Built this workflow because most of our users signed up, then vanished after ~30 days.
It runs daily, grabs those stale users from Supabase, updates a Google Sheet for tracking, and automatically sends each one a personalized HTML email through Gmail to bring them back.

All fully automated — so once it’s set up, it quietly does its job in the background.
Currently, it only supports Supabase, but the concept should work with any DB or API if you swap out the request node.