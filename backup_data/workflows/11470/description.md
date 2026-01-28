Get notified when the International Space Station passes over your location - but only when you can actually see it! This workflow combines real-time ISS tracking with weather condition checks to send you alerts at the perfect moment for observation.

## Who is this for

- Space enthusiasts and astronomy hobbyists who want to spot the ISS
- Parents looking to share exciting science moments with their kids
- Remote workers who want a unique break reminder
- Educators creating engaging science experiences

## What this workflow does

1. Tracks ISS position every 10 minutes using the Open Notify API
2. Calculates distance and direction from your location using the Haversine formula
3. Checks weather conditions via OpenWeatherMap to determine if ISS will be visible
4. Provides observation guidance including compass direction, elevation angle, and viewing tips
5. Includes crew information showing who is currently aboard the ISS
6. Sends multi-channel alerts to Discord, Telegram, and Gmail simultaneously

## How to set up

1. Configure your location in the Calculate Distance and Direction node
2. Add OpenWeatherMap credentials (free tier available)
3. Set up at least one notification channel (Discord, Telegram, or Gmail)
4. Activate the workflow

## Requirements

- OpenWeatherMap API key (free)
- At least one notification channel configured