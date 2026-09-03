# Did you know you can reuse the WebAPI's authorization tokens?

By default, Flexygo generates a new token on every request to the `/token` endpoint. However, this behavior can be changed.

## Solution

For the system to return the same token while it remains valid, you need to:

1. Go to the application's parameters
2. Enable the **ReuseToken** option

## Result

Once this setting is enabled, as long as a token stays "alive" it will be returned on every request. This optimizes performance by reusing valid tokens instead of constantly generating new ones.

![](../../docs_assets/images/DidYouKnow/WebApiReuseToken/1.png)
