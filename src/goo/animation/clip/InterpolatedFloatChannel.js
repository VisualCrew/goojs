define(['goo/animation/clip/AbstractAnimationChannel', 'goo/animation/clip/TriggerData', 'goo/math/MathUtils'], function (AbstractAnimationChannel,
	TriggerData, MathUtils) {
	"use strict";

	InterpolatedFloatChannel.prototype = Object.create(AbstractAnimationChannel.prototype);

	/**
	 * @name InterpolatedFloatChannel
	 * @class An animation source channel consisting of float value samples. These samples are interpolated between key frames. Potential uses for
	 *        this channel include extracting and using forward motion from walk animations, animating colors or texture coordinates, etc.
	 * @param channelName the name of this channel.
	 * @param times the time samples
	 * @param values our value samples. Entries may be null. Should have as many entries as the times array.
	 */
	function InterpolatedFloatChannel(channelName, times, values) {
		AbstractAnimationChannel.call(this, channelName, times);
		this._values = values ? values.slice(0) : null;
	}

	InterpolatedFloatChannel.prototype.createStateDataObject = function (instance) {
		return [0.0];
	};

	InterpolatedFloatChannel.prototype.setCurrentSample = function (sampleIndex, progressPercent, value) {
		store[0] = MathUtils.lerp(progressPercent, this._values[sampleIndex], this._values[sampleIndex + 1]);
	};

	return InterpolatedFloatChannel;
});