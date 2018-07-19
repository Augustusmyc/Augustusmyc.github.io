(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Qubit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990033").s().p("AioCpQhHhHAAhiQAAhhBHhHQBHhHBhAAQBiAABHBHQBHBHAABhQAABihHBHQhHBHhiAAQhhAAhHhHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Qubit, new cjs.Rectangle(-24,-24,48,48), null);


(lib.input_neuron = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ABCF9A").s().p("AhpBqQgsgrAAg/QAAg9AsgsQAsgsA9AAQA/AAArAsQAsAsAAA9QAAA/gsArQgrAsg/AAQg9AAgsgsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-15,30,30);


(lib.vio_core = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* gotoAndPlay(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AAAWRQgHAAgGgGQgGgGAAgIIAAgyQAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAAyQAAAIgGAGQgGAGgIAAIAAAAgAAAUjQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAASrQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAQzQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAO7QgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAANDQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAALLQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAJTQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAHbQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAFjQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAADrQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAABzQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAgEQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAh8QgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAj0QgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAlsQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAnkQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAApcQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAArUQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAtMQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAvEQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAw8QgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAAy0QgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAgAAA0sQgHAAgGgGQgGgGAAgIIAAg8QAAgIAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAIIAAA8QAAAIgGAGQgGAGgIAAIAAAAg");
	this.shape.setTransform(-27.5,10);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(14));

	// half_circle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0)").s().p("Aj5tkQBuBBBhBhQEbEcAJGNIAAAzQgJGNkbEcQhhBhhuBBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,0,0.961)").s().p("AkEuJQBzBDBlBlQBTBUA9BdQCaDtAHEqIAAA0QgHEpiaDtQg9BdhTBTQhlBmhzBDg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,0,0.894)").s().p("AkXvJQB8BIBsBsIABABQBYBZBBBkQCkD9AJE+IAAAFIAAAzIAAAGQgJE7ikD7QhBBkhZBaQhsBsh8BIg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,0,0.827)").s().p("AkpQKMAAAggTQCDBNB0BzIABABQBeBfBEBqQCwENAJFTIAAAGIAAA2IAAAGQgKFQiuEMQhFBrhfBfIAAABQh0BziDBNg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,0,0.761)").s().p("Ak7xJQCLBRB6B7IACABQBjBlBKBwQC6EdAJFoIAAAHIAAA5IAAAGQgKFmi4EcQhKByhlBlIgBAAQh6B7iLBSg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,0,0,0.694)").s().p("AlOSKMAAAgkTQCTBWCCCCIABABQBqBqBNB3QDGEuAKF9IAAAHIAAA8IAAAHQgLF6jCEtQhPB4hsBsIAAABQiBCCiTBWg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,0,0,0.627)").s().p("AlgzJQCbBbCJCIIABABQBvBwBSB9QDQFAALGQIAAAIIAABBIAAAGQgLGQjNE9QhTB/hxByIgBABQiICIicBbIAAABg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,0,0,0.561)").s().p("Alz0JQCkBfCPCQIABABQB2B2BVCDQDcFQAMGlIAAAIIAABFIAAAHQgMGjjYFPQhXCGh4B4IAAABQiQCPijBgIgBABg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,0,0,0.498)").s().p("AmF1JQCsBlCWCXIABAAQB7B8BbCKQDmFgAMG6IAAAIIAABIIAAAHQgLG6jkFeQhbCNh+B+IAAABQiXCWirBmIgBAAg");
	this.shape_9.setTransform(0,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,0,0,0.431)").s().p("AmX2JQCzBpCeCeIABABQCBCCBeCQQDxFwANHPIAAAJIAABLIAAAIQgLHOjuFvQhgCUiDCEIgBABQieCdi0BrIAAAAg");
	this.shape_10.setTransform(0,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,0,0,0.365)").s().p("Amq3JQC8BuClClIABABQCHCIBiCWQD8GAAOHlIAAAJIAABOIAAAIQgMHjj5GAQhkCbiKCKIgBAAQikCmi8BuIgBABg");
	this.shape_11.setTransform(0,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,0,0,0.298)").s().p("Am84JQDDBzCtCsIAAABQCNCNBmCdQEIGRAOH5IAAAKIAABRIAAAJQgMH3kDGRQhpCiiQCQIgBABQisCsjDBzIgBABg");
	this.shape_12.setTransform(0,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,0,0,0.231)").s().p("AnO5JQDLB3C0C0IABABQCSCTBrCjQERGhAPIOIAAAKIAABVIAAAJQgMINkOGhQhtCoiWCXIAAAAQi0C0jMB4IAAABg");
	this.shape_13.setTransform(0,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,0,0,0.165)").s().p("Anh6IQDUB8C6C5IABABQCYCaBvCpQEdGyAPIiIAAALIAABYIAAAKQgMIhkZGyQhxCvicCcIgBABQi6C7jUB9IgBABg");
	this.shape_14.setTransform(0,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,0,0,0.098)").s().p("Anz7IQDcCADCDDQI3I3ASMbIAABnQgSMao3I4QjCDBjcCDg");
	this.shape_15.setTransform(0,0.1,1,1,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-86.8,50,173.8);


(lib.ent_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E75B6").s().p("AjTDUQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7QAAB8hYBYQhYBYh8AAQh7AAhYhYg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5E0B4").s().p("ArCLDQklkkAAmfQAAmdElklQElklGdAAQGeAAElElQElElAAGdIAAAIIAAAYQgLGKkaEZQklElmeAAQmdAAklklg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ent_circle, new cjs.Rectangle(-100,-100,200,200), null);


(lib.empty_pos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,81,198,0.2)").s().p("AiwCwQhJhIAAhoQAAhnBJhJQBJhJBnAAQBoAABIBJQBKBJAABnQAABohKBIQhIBKhoAAQhnAAhJhKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.empty_pos, new cjs.Rectangle(-25,-25,50,50), null);


(lib.signal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AgfAgQgNgOAAgSQAAgRANgOQAOgNARAAQASAAAOANQANAOAAARQAAASgNAOQgOANgSAAQgRAAgOgNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.signal, new cjs.Rectangle(-4.5,-4.5,9,9), null);


(lib.relu_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_14 = function() {
		/* gotoAndPlay(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// circle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6AE90").s().p("AnnHoQjKjKAAkeQAAkdDKjKQDKjKEdAAQEeAADKDKQDKDKAAEdQAAEejKDKQjKDKkeAAQkdAAjKjKg");
	this.shape.setTransform(0,0,0.362,0.362);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(246,174,144,0.976)").s().p("Ai4C5QhMhNgBhsQABhrBMhNQBMhMBsgBQBsABBMBMQBOBNAABrQAABshOBNQhMBMhsABQhsgBhMhMg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(246,174,144,0.953)").s().p("AjBDBQhPhQAAhxQAAhwBPhRQBRhPBwAAQBxAABQBPQBQBRAABwQAABxhQBQQhQBQhxAAQhwAAhRhQg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(246,174,144,0.929)").s().p("AjJDKQhShUAAh2QAAh1BShUQBThSB2AAQB2AABTBSQBUBUgBB1QABB2hUBUQhTBSh2AAQh2AAhThSg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(246,174,144,0.906)").s().p("AjRDSQhWhYAAh6QAAh5BWhYQBXhWB6AAQB6AABYBWQBWBYAAB5QAAB6hWBYQhYBWh6AAQh6AAhXhWg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(246,174,144,0.882)").s().p("AjZDaQhahbAAh/QAAh/BahaQBahaB/AAQB/AABbBaQBZBaABB/QgBB/hZBbQhbBZh/ABQh/gBhahZg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(246,174,144,0.859)").s().p("AjhDiQhdheAAiEQAAiEBdhdQBdhdCEAAQCEAABeBdQBdBdAACEQAACEhdBeQheBdiEAAQiEAAhdhdg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(246,174,144,0.839)").s().p("AjpDqQhhhhAAiJQAAiIBhhhQBhhhCIAAQCJAABhBhQBhBhAACIQAACJhhBhQhhBhiJAAQiIAAhhhhg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(246,174,144,0.816)").s().p("AjxDyQhkhlgBiNQABiNBkhkQBkhkCNgBQCNABBlBkQBkBkABCNQgBCNhkBlQhlBkiNABQiNgBhkhkg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(246,174,144,0.792)").s().p("Aj5D6QhohoAAiSQAAiSBohnQBnhoCSAAQCSAABoBoQBoBnAACSQAACShoBoQhoBoiSAAQiSAAhnhog");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(246,174,144,0.769)").s().p("AkBECQhrhrAAiXQAAiWBrhrQBrhrCWAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBsiXgBQiWABhrhsg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(246,174,144,0.745)").s().p("AkJEKQhvhuAAicQAAicBvhtQBthvCcAAQCcAABuBvQBvBtAACcQAACchvBuQhuBvicAAQicAAhthvg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(246,174,144,0.722)").s().p("AkSESQhyhxAAihQAAigByhyQByhyCgAAQCgAABzByQByByAACgQAAChhyBxQhzByigABQiggBhyhyg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(246,174,144,0.698)").s().p("AnnHoQjKjKAAkeQAAkdDKjKQDKjKEdAAQEeAADKDKQDKDKAAEdQAAEejKDKQjKDKkeAAQkdAAjKjKg");
	this.shape_13.setTransform(0,0,0.58,0.58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-25,50,50);


(lib.Violation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.vio_core = new lib.vio_core();
	this.vio_core.name = "vio_core";
	this.vio_core.parent = this;

	this.B = new lib.empty_pos();
	this.B.name = "B";
	this.B.parent = this;
	this.B.setTransform(-25,87);
	this.B.visible = false;

	this.A = new lib.empty_pos();
	this.A.name = "A";
	this.A.parent = this;
	this.A.setTransform(-25,-87);
	this.A.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.A},{t:this.B},{t:this.vio_core}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Violation, new cjs.Rectangle(-50,-112,75,224), null);


(lib.Diagram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* import Transfer_line;
		violation_1.mode = Transfer_line.RIGHT;
		violation_2.mode = Transfer_line.DOWN;
		violation_3.mode = Transfer_line.LEFT;
		violation_4.mode = Transfer_line.UP;
		
		listeners.push(violation_1);
		listeners.push(violation_2);
		listeners.push(violation_3);
		listeners.push(violation_4);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// BG
	this.violation_4 = new lib.Violation();
	this.violation_4.name = "violation_4";
	this.violation_4.parent = this;
	this.violation_4.setTransform(0,-75,1,1,-90);

	this.violation_3 = new lib.Violation();
	this.violation_3.name = "violation_3";
	this.violation_3.parent = this;
	this.violation_3.setTransform(-75,0,1,1,180);

	this.violation_2 = new lib.Violation();
	this.violation_2.name = "violation_2";
	this.violation_2.parent = this;
	this.violation_2.setTransform(0,75,1,1,90);

	this.violation_1 = new lib.Violation();
	this.violation_1.name = "violation_1";
	this.violation_1.parent = this;
	this.violation_1.setTransform(75,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.violation_1},{t:this.violation_2},{t:this.violation_3},{t:this.violation_4}]}).wait(1));

	// ent_circle
	this.ent_circle = new lib.ent_circle();
	this.ent_circle.name = "ent_circle";
	this.ent_circle.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.ent_circle).wait(1));

}).prototype = getMCSymbolPrototype(lib.Diagram, new cjs.Rectangle(-112,-112,224,224), null);


(lib.Relu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// qubit
	this.instance = new lib.Qubit();
	this.instance.parent = this;
	this.instance.setTransform(-14.6,0,0.189,0.189);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0},23).to({x:12,y:-12},24).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.9,1,1).p("AiBA8ICLAAIB4h3");
	this.shape.setTransform(-1,-6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(48));

	// relu_back
	this.relu_back = new lib.relu_back();
	this.relu_back.name = "relu_back";
	this.relu_back.parent = this;
	this.relu_back.setTransform(-2,-4.9,0.758,0.758);

	this.timeline.addTween(cjs.Tween.get(this.relu_back).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,-23.9,37.9,37.9);


(lib.Output = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// qubit
	this.qubit = new lib.Qubit();
	this.qubit.name = "qubit";
	this.qubit.parent = this;
	this.qubit.setTransform(-27,15,0.417,0.417,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.qubit).to({regX:0.3,regY:0,guide:{path:[-27,14.8,-20.9,14.1,-16.9,12.3,-10.2,9.4,-0.2,-0.6,9.5,-10.4,16.7,-13.3,20.6,-14.9,26.9,-15.5]}},47).wait(1));

	// Sigmoid
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AlqCdQCAAABEgeQBCgdBkhkQBihiBIgdQBBgbCAAA");
	this.shape.setTransform(-0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(48));

	// BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("AjRFbQgpgZgjgkQh3h2AAioQAAinB3h2QB2h3CnAAQCoAAB2B3QB3B2AACnQAACoh3B2QgjAkgpAZQhdA6h1AAQh0AAhdg6g");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(48));

	// neg_txt
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgFBSQgHgEgCgGQgDgHAAgOIAAhUIgUAAIAAgEQAIgEAHgHQAIgHAHgKIAIgTIADAAIAAApIAfAAIAAAKIgfAAIAABRQAAANAFAEQADAEAGAAQAEAAAEgDQAEgCADgGIAFAAQgEAOgKAHQgIAGgKAAQgGAAgFgDg");
	this.shape_2.setTransform(-48.4,194.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAaBBIAAgbQgQASgJAFQgIAEgJAAQgLABgHgHQgIgGgDgJQgEgLAAgRIAAg4QAAgIgBgEQgCgEgEgCQgEgBgKAAIAAgGIAtAAIAABVQAAASAGAFQAGAFAJAAQAEAAAJgDQAHgEAKgLIAAhHQAAgLgEgDQgDgEgNAAIAAgGIArAAIAABMQAAAXABAEQABAFADADQABABADAAQAFAAAFgCIADAEIgnAQg");
	this.shape_3.setTransform(-59.5,196.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AhBBgIAAgGIADAAQAHAAAGgCQACgCACgDQABgDAAgPIAAh3QAAgMAAgDQgCgEgCgBQgCgBgEAAIgJABIgCgEIAngQIAGAAIAAAeQAJgRALgHQAIgHALABQATAAANAOQAPATAAAdQAAAggSAWQgPARgYAAQgKAAgHgDQgGgCgGgHIAAAoQAAANABADQABADAEACQAFACAJAAIAAAGgAgEhHQgFACgLANIAAAvQAAAPABAEQABAIAJAHQAHAFALABQANAAAIgLQAMgPAAgYQAAgdgNgPQgJgMgMABQgHgBgFAEg");
	this.shape_4.setTransform(-74.3,199.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgFBSQgGgEgDgGQgDgHAAgOIAAhUIgUAAIAAgEQAHgEAIgHQAJgHAGgKIAIgTIADAAIAAApIAeAAIAAAKIgeAAIAABRQAAANAEAEQAEAEAFAAQAFAAAEgDQAEgCADgGIAFAAQgEAOgKAHQgIAGgKAAQgGAAgFgDg");
	this.shape_5.setTransform(-84.6,194.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AAaBBIAAgbQgQASgIAFQgJAEgJAAQgLABgHgHQgIgGgDgJQgDgLgBgRIAAg4QABgIgCgEQgCgEgEgCQgEgBgJAAIAAgGIAsAAIAABVQgBASAHAFQAGAFAJAAQAEAAAJgDQAHgEAKgLIAAhHQAAgLgEgDQgDgEgNAAIAAgGIArAAIAABMQAAAXABAEQABAFADADQACABACAAQAFAAAFgCIACAEIgmAQg");
	this.shape_6.setTransform(-95.7,196.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AguAsQgOgTAAgYQAAgQAJgSQAIgRAOgIQAOgIAPAAQAdAAARAWQAPASAAAYQAAARgIARQgIARgOAJQgPAJgQAAQgdAAgRgXgAgSg1QgHAEgFALQgEALAAARQAAAbALAUQALAUARAAQANAAAJgLQAIgLAAgbQAAghgOgTQgKgNgOAAQgHAAgIAEg");
	this.shape_7.setTransform(-110,196.7);

	this.prob_txt = new cjs.Text("0.5", "34px 'Times New Roman'", "#FFFF00");
	this.prob_txt.name = "prob_txt";
	this.prob_txt.lineHeight = 40;
	this.prob_txt.lineWidth = 106;
	this.prob_txt.parent = this;
	this.prob_txt.setTransform(52.7,174.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AgsARIAAgHIBZAAIAAAHgAgsgJIAAgHIBZAAIAAAHg");
	this.shape_8.setTransform(38.5,195);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AgYAbIAAgCIAjgvIgRAAIgHABIgDADQgCADABAEIgDAAIABgPIAsAAIAAACIgjAvIASAAIAJgBIADgEIABgIIADAAIgCARg");
	this.shape_9.setTransform(14.8,201.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgOAFIAAgIIAdAAIAAAIg");
	this.shape_10.setTransform(7.1,201.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AgVAdQgKgKAAgSQAAgTAKgKQAKgLAOAAQANgBAIAJQAIAJAAANIgzAAQAAAQAIAKQAIAKALAAQAHAAAFgEQAGgFADgKIADACQgBALgJAKQgJAKgMAAQgNAAgJgMgAgNgcQgFAFgBAKIAiAAQgBgHgBgEQgCgEgEgDQgEgDgEAAQgGAAgGAGg");
	this.shape_11.setTransform(-0.7,208.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgCAtIAAgqIgqAAIAAgGIAqAAIAAgpIAFAAIAAApIAqAAIAAAGIgqAAIAAAqg");
	this.shape_12.setTransform(-13.7,206.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AgTA6IAAgDQAIAAACgCQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBQABgCAAgKIAAg8QAAgMgBgEIgCgEIgFgBQgDAAgFADIgBgDIAagOIADAAIAABfQAAAJABADQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQADACAHAAIAAADg");
	this.shape_13.setTransform(-27,206.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AgTA5IAAgCQAIgBACgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAABgBQABgCAAgLIAAg7QAAgNgBgDIgDgEIgDgBQgDAAgGACIgBgCIAbgOIACAAIAABeQAAAKABACQAAABAAABQABAAAAABQAAAAABAAQAAABABAAQADABAHABIAAACg");
	this.shape_14.setTransform(-6,183.9);

	this.z_txt = new cjs.Text("z = 0", "34px 'Times New Roman'", "#FFFF00");
	this.z_txt.name = "z_txt";
	this.z_txt.lineHeight = 40;
	this.z_txt.lineWidth = 203;
	this.z_txt.parent = this;
	this.z_txt.setTransform(-67.2,139.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFF00").ss(1,1,1).p("AkVAAIIrAA");
	this.shape_15.setTransform(-4.9,194.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.z_txt},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.prob_txt},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.4,-40.5,281,258.1);


(lib.Transfer_line_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* //stop();*/
	}
	this.frame_14 = function() {
		/* gotoAndPlay(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// final_weight
	this.final_weight = new cjs.Text("0", "17px 'Times New Roman'", "#FFFF00");
	this.final_weight.name = "final_weight";
	this.final_weight.lineHeight = 21;
	this.final_weight.lineWidth = 73;
	this.final_weight.parent = this;
	this.final_weight.setTransform(19.8,-16.4);

	this.timeline.addTween(cjs.Tween.get(this.final_weight).wait(15));

	// Relu
	this.relu = new lib.Relu();
	this.relu.name = "relu";
	this.relu.parent = this;
	this.relu.setTransform(-1,-1,1,1,0,0,0,-2,-5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,153,0,0)").s().p("AikOBIAAlKIFJAAIAAFKgAikGZIAAlLIFJAAIAAFLgAikhOIAAlKIFJAAIAAFKgAiko3IAAlJIFJAAIAAFJg");
	this.shape.setTransform(16,-57.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.relu}]}).wait(15));

	// final_signal
	this.final_signal = new lib.signal();
	this.final_signal.name = "final_signal";
	this.final_signal.parent = this;
	this.final_signal.setTransform(-0.9,0.5);
	this.final_signal.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 102, 0)];
	this.final_signal.cache(-6,-6,13,13);

	this.timeline.addTween(cjs.Tween.get(this.final_signal).to({x:86,y:-52},14).wait(1));

	// line
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFCC33").ss(1,1,1).p("AGukDItbIH");
	this.shape_1.setTransform(42.5,-26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF6600").ss(1,1,1).p("AmNh9IMbJGAmN0WIMbbfAmNrNIMbSWAmLUXIMZtOAmLLJIMZkA");
	this.shape_2.setTransform(-40.3,-46.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF6600").ss(1,1,1).p("AmNh9IMbJGAmNrNIMbSWAmN0WIMbbfAmLLJIMZkAAmLUXIMZtO");
	this.shape_3.setTransform(-40.3,-46.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3},{t:this.shape_1}]},14).wait(1));

	// signal
	this.instance = new lib.signal();
	this.instance.parent = this;
	this.instance.setTransform(-80,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:4,x:0,y:4},13).wait(1));

	// signal
	this.instance_1 = new lib.signal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:0,y:0},13).wait(1));

	// signal
	this.instance_2 = new lib.signal();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-80,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:0,y:0},13).wait(1));

	// signal
	this.instance_3 = new lib.signal();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-80,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:0,y:0},13).wait(1));

	// signal
	this.instance_4 = new lib.signal();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-80,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:0,y:0},13).wait(1));

	// 图层_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(102,153,0,0)").s().p("AikClIAAlJIFJAAIAAFJg");
	this.shape_4.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(15));

	// 图层_4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,153,0,0)").s().p("AikClIAAlJIFJAAIAAFJg");
	this.shape_5.setTransform(16,-32.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(15));

	// 图层_5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,153,0,0)").s().p("AikClIAAlJIFJAAIAAFJg");
	this.shape_6.setTransform(16,-81.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(15));

	// 图层_6
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,153,0,0)").s().p("AikClIAAlJIFJAAIAAFJg");
	this.shape_7.setTransform(16,-130.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-181.5,179.3,270);


(lib.Transfer_line_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* //stop();*/
	}
	this.frame_14 = function() {
		/* gotoAndPlay(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(26));

	// final_weight
	this.final_weight = new cjs.Text("0", "17px 'Times New Roman'", "#FFFF00");
	this.final_weight.name = "final_weight";
	this.final_weight.lineHeight = 21;
	this.final_weight.lineWidth = 66;
	this.final_weight.parent = this;
	this.final_weight.setTransform(14.8,-76.4);

	this.timeline.addTween(cjs.Tween.get(this.final_weight).to({_off:true},15).wait(25));

	// Relu
	this.relu = new lib.Relu();
	this.relu.name = "relu";
	this.relu.parent = this;
	this.relu.setTransform(-1,-50,1,1,0,0,0,-2,-5);

	this.timeline.addTween(cjs.Tween.get(this.relu).to({_off:true},15).wait(25));

	// final_signal
	this.final_signal = new lib.signal();
	this.final_signal.name = "final_signal";
	this.final_signal.parent = this;
	this.final_signal.setTransform(-0.9,-49.5);
	this.final_signal.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 102, 0)];
	this.final_signal.cache(-6,-6,13,13);

	this.timeline.addTween(cjs.Tween.get(this.final_signal).to({x:86,y:-52},14).to({_off:true},1).wait(25));

	// signal
	this.instance = new lib.signal();
	this.instance.parent = this;
	this.instance.setTransform(-80,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:4,x:0,y:-45},13).to({_off:true},1).wait(25));

	// signal
	this.instance_1 = new lib.signal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:0,y:-49},13).to({_off:true},1).wait(25));

	// signal
	this.instance_2 = new lib.signal();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-80,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:0,y:-49},13).to({_off:true},1).wait(25));

	// signal
	this.instance_3 = new lib.signal();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-80,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:0,y:-49},13).to({_off:true},1).wait(25));

	// signal
	this.instance_4 = new lib.signal();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-80,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:0,y:-49},13).to({_off:true},1).wait(25));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC33").ss(1,1,1).p("AGugOItbAd");
	this.shape.setTransform(42.5,-51);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6600").ss(1,1,1).p("AmNh9IMbBdAmNrNIMbKtAmN0WIMbT2AmLLJIMZrpAmLUXIMZ03");
	this.shape_1.setTransform(-40.3,-46.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-181.5,171,270);


(lib.Transfer_line_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* //stop();*/
	}
	this.frame_14 = function() {
		/* gotoAndPlay(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// final_weight
	this.final_weight = new cjs.Text("0", "17px 'Times New Roman'", "#FFFF00");
	this.final_weight.name = "final_weight";
	this.final_weight.lineHeight = 21;
	this.final_weight.lineWidth = 80;
	this.final_weight.parent = this;
	this.final_weight.setTransform(13.8,-125.4);

	this.timeline.addTween(cjs.Tween.get(this.final_weight).wait(15));

	// Relu
	this.relu = new lib.Relu();
	this.relu.name = "relu";
	this.relu.parent = this;
	this.relu.setTransform(-0.6,-99,1,1,0,0,0,-2,-5);

	this.timeline.addTween(cjs.Tween.get(this.relu).wait(15));

	// final_signal
	this.final_signal = new lib.signal();
	this.final_signal.name = "final_signal";
	this.final_signal.parent = this;
	this.final_signal.setTransform(-0.9,-98.5);
	this.final_signal.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 102, 0)];
	this.final_signal.cache(-6,-6,13,13);

	this.timeline.addTween(cjs.Tween.get(this.final_signal).to({x:86,y:-52},14).wait(1));

	// signal
	this.instance = new lib.signal();
	this.instance.parent = this;
	this.instance.setTransform(-80,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:4,x:0,y:-94},13).wait(1));

	// signal
	this.instance_1 = new lib.signal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:0,y:-98},13).wait(1));

	// signal
	this.instance_2 = new lib.signal();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-80,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:0,y:-98},13).wait(1));

	// signal
	this.instance_3 = new lib.signal();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-80,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:0,y:-98},13).wait(1));

	// signal
	this.instance_4 = new lib.signal();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-80,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:0,y:-98},13).wait(1));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC33").ss(1,1,1).p("AGuDmItbnL");
	this.shape.setTransform(42.5,-75.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6600").ss(1,1,1).p("AmNh9IMbmNAmN0WIMbMMAmNrNIMbDDAmLLJIMZzTAmLUXIMZ8h");
	this.shape_1.setTransform(-40.3,-46.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-181.5,180.6,270);


(lib.Transfer_line_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* //stop();*/
	}
	this.frame_14 = function() {
		/* gotoAndPlay(2);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// final_weight
	this.final_weight = new cjs.Text("0", "17px 'Times New Roman'", "#FFFF00");
	this.final_weight.name = "final_weight";
	this.final_weight.lineHeight = 21;
	this.final_weight.lineWidth = 62;
	this.final_weight.parent = this;
	this.final_weight.setTransform(16.8,-177.4);

	this.timeline.addTween(cjs.Tween.get(this.final_weight).wait(15));

	// Relu
	this.relu = new lib.Relu();
	this.relu.name = "relu";
	this.relu.parent = this;
	this.relu.setTransform(0,-148,1,1,0,0,0,-2,-5);

	this.timeline.addTween(cjs.Tween.get(this.relu).wait(15));

	// signal
	this.instance = new lib.signal();
	this.instance.parent = this;
	this.instance.setTransform(-80,-177);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:4,x:0,y:-144},13).wait(1));

	// signal
	this.instance_1 = new lib.signal();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:0,y:-148},13).wait(1));

	// signal
	this.instance_2 = new lib.signal();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-80,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:0,y:-148},13).wait(1));

	// signal
	this.instance_3 = new lib.signal();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-80,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:0,y:-148},13).wait(1));

	// signal
	this.instance_4 = new lib.signal();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-80,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:0,y:-148},13).wait(1));

	// final_signal
	this.final_signal = new lib.signal();
	this.final_signal.name = "final_signal";
	this.final_signal.parent = this;
	this.final_signal.setTransform(-0.9,-147.5);
	this.final_signal.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 102, 0)];
	this.final_signal.cache(-6,-6,13,13);

	this.timeline.addTween(cjs.Tween.get(this.final_signal).to({x:86,y:-52},14).wait(1));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC33").ss(1,1,1).p("AGuHbItbu1");
	this.shape.setTransform(42.5,-100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF6600").ss(1,1,1).p("AmNrNIMbknAmN0WIMbEiAmNh9IMbt3AmLUXMAMZgkLAmLLJIMZ69");
	this.shape_1.setTransform(-40.3,-46.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-181.5,171,270);


(lib.Transfer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// input
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcA6IAAgDIADAAQAIAAADgCQACgCABgDQABgDAAgLIAAg4IAAgKIgDgEQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgEAAgGADIgCgEIApgTIADAAIAABbQAAALABADQAAADAEABQADACAGABIADAAIAAADg");
	this.shape.setTransform(-81.4,132.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgCQACgDADAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_1.setTransform(-81,39.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgCQACgDADAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_2.setTransform(-81,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgCQACgDADAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(-81,30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgCQACgDADAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_4.setTransform(-81,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgCQACgDADAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_5.setTransform(-81,22.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgCQACgDADAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_6.setTransform(-81,18);

	this.instance = new lib.input_neuron("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-80,132);

	this.instance_1 = new lib.input_neuron("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80,74);

	this.instance_2 = new lib.input_neuron("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-80,-12);

	this.instance_3 = new lib.input_neuron("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-80,-72);

	this.instance_4 = new lib.input_neuron("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-80,-129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// output
	this.output = new lib.Output();
	this.output.name = "output";
	this.output.parent = this;
	this.output.setTransform(86,-5,0.617,0.617);

	this.timeline.addTween(cjs.Tween.get(this.output).wait(1));

	// transfer_line_4
	this.transfer_line_4 = new lib.Transfer_line_4();
	this.transfer_line_4.name = "transfer_line_4";
	this.transfer_line_4.parent = this;
	this.transfer_line_4.setTransform(1.2,1,1,1,0,0,0,0.8,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.transfer_line_4).wait(1));

	// transfer_line_3
	this.transfer_line_3 = new lib.Transfer_line_3();
	this.transfer_line_3.name = "transfer_line_3";
	this.transfer_line_3.parent = this;
	this.transfer_line_3.setTransform(1.4,1,1,1,0,0,0,0.8,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.transfer_line_3).wait(1));

	// transfer_line_2
	this.transfer_line_2 = new lib.Transfer_line_2();
	this.transfer_line_2.name = "transfer_line_2";
	this.transfer_line_2.parent = this;
	this.transfer_line_2.setTransform(1.5,1.1,1,1,0,0,0,0.8,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.transfer_line_2).wait(1));

	// transfer_line_1
	this.transfer_line_1 = new lib.Transfer_line_1();
	this.transfer_line_1.name = "transfer_line_1";
	this.transfer_line_1.parent = this;
	this.transfer_line_1.setTransform(1.5,1.1,1,1,0,0,0,0.8,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.transfer_line_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Transfer, new cjs.Rectangle(-95,-144,280.1,291), null);


// stage content:
(lib.Bell不等式演示_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* //var diag:Diagram = new Diagram();
		//diag.x = 120;
		//diag.y = 150;
		//stage.addChild(diag);
		transfer.addListener(diagram);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// diagram
	this.diagram = new lib.Diagram();
	this.diagram.name = "diagram";
	this.diagram.parent = this;
	this.diagram.setTransform(322.9,146.1,1,1,0,0,0,-104.5,-32.5);

	this.timeline.addTween(cjs.Tween.get(this.diagram).wait(1));

	// transfer
	this.transfer = new lib.Transfer();
	this.transfer.name = "transfer";
	this.transfer.parent = this;
	this.transfer.setTransform(152,196.8,1.35,1.35,0,0,0,1.3,1.1);

	this.timeline.addTween(cjs.Tween.get(this.transfer).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(297,200.9,517.4,392.8);
// library properties:
lib.properties = {
	id: 'D92643871472A040B7F886ABAF33BAE4',
	width: 550,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D92643871472A040B7F886ABAF33BAE4'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;