# WP Privacy Toolset

This WordPress plugin is designed to implement the cookie banner and "do not sell" dialog from the wp-calypso project.

## Use

1. Add the plugin and activate.
2. Place the "Privacy Tools Consent Banner" block in a template part used on all pages—i.e. your footer.
   2a. If using a non-block theme, this will be automatically applied to the footer.
3. Add the do-not-sell link to the same component as a normal link with the ID `#do-not-sell-preferences`.

```html
<p id="do-not-sell-preferences" style="display: none;"><a href="#">Do not sell or share my personal information.</a></p>
```

## Development

1. `cd block`
2. `yarn`
3. `yarn start`