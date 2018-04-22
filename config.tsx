
import * as React from "/Applications/Oni.app/Contents/Resources/app/node_modules/react"
import * as Oni from "/Applications/Oni.app/Contents/Resources/app/node_modules/oni-api"

export const activate = (oni: Oni.Plugin.Api) => {
    console.log("config activated")

    const isNormalMode = () => oni.editors.activeEditor.mode === "normal"
    const isMenuOpen = () => oni.menu.isMenuOpen()

    // Input
    //
    // Add input bindings here:
    //
    oni.input.bind("<c-enter>", () => console.log("Control+Enter was pressed"))
    oni.input.bind(",f", "quickOpen.show", () => isNormalMode() && !isMenuOpen())
    oni.input.bind(",n", "sidebar.toggle", () => isNormalMode() && !isMenuOpen())
    oni.input.bind(",t", "language.symbols.workspace", () => isNormalMode() && !isMenuOpen())
    oni.input.bind(",d", "language.symbols.document", () => isNormalMode() && !isMenuOpen())
    //
    // Or remove the default bindings here by uncommenting the below line:
    //
    // oni.input.unbind("<c-p>")

}

export const deactivate = (oni: Oni.Plugin.Api) => {
    console.log("config deactivated")
}

export const configuration = {
    "oni.useDefaultConfig": false,
    "oni.loadInitVim": true,
    "oni.hideMenu": true,
    "tabs.mode": "hidden",
    //add custom config here, such as

    "ui.colorscheme": "quantum",

    //"oni.bookmarks": ["~/Documents"],
    "editor.fontSize": "14px",
    "editor.fontFamily": "Lekton",

    // UI customizations
    "ui.animations.enabled": true,
    "ui.fontSmoothing": "auto",

    "language.rust.languageServer.command": "rustup",
    "language.rust.languageServer.arguments": ["run", "nightly", "rls"],
    "language.rust.languageServer.rootFiles": ["Cargo.toml"],
}
