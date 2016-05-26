const St = imports.gi.St;
const Mainloop = imports.mainloop;
const Main = imports.ui.main;
const Shell = imports.gi.Shell;
const Lang = imports.lang;
const PopupMenu = imports.ui.popupMenu;
const PanelMenu = imports.ui.panelMenu;
const Gettext = imports.gettext;
const MessageTray = imports.ui.messageTray;

let button;

function _button() {
    this._init();
}

_button.prototype = {
	__proto__: PanelMenu.Button.prototype,
	
	_init: function() {
		PanelMenu.Button.prototype._init.call(this, 0.0);
		this
	}
};

function init() {
    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          x_fill: true,
                          y_fill: false,
                          track_hover: true });
    let icon = new St.Icon({ icon_name: 'stock_calendar',
                             style_class: 'system-status-icon' });

    button.set_child(icon);
    button.connect('button-press-event', _showUntis);
}

function enable() {
    Main.panel._centerBox.insert_child_at_index(button, -1);
}

function disable() {
    Main.panel._centerBox.remove_child(button);
}
