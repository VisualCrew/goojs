define(function() {
	"use strict";

	/**
	 * @name AbstractFiniteState
	 * @class Base class for a finite state in our finite state machine.
	 */
	function AbstractFiniteState() {
		this._globalStartTime = 0;
		this._lastOwner = null;
	}

	AbstractFiniteState.prototype.resetClips = function(manager, globalStartTime) {
		if (globalStartTime === undefined) {
			this._globalStartTime = manager.getCurrentGlobalTime();
		} else {
			this._globalStartTime = globalStartTime;
		}
	};

	return AbstractFiniteState;
});