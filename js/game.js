var App = App || {};

;(function() {
	
	App.Breakout = {

		init: function() {
			this.defineVariables();
			this.buildGame();
		},

		defineVariables: function() {
			// Constants			
			this.PADDLE_HEIGHT = 8;
			this.PADDLE_WIDTH = 80;

			this.START = false;
			this.WIN = false;
			
			this.FRAMES = 30;

			// Variables
			this.canvas = document.getElementById('canvas');
			this.ctx = this.canvas.getContext('2d');
		},

		buildGame: function() {
			window.onload = function() {
				var self = App.Breakout;

				self.Modules.drawArena();
			}
		},

		Modules: {
			drawArena: function() {
				var self = App.Breakout;

				// Draw background
				this.colorRect(0, 0, self.canvas.width, self.canvas.height, 'black');
			},

			colorRect: function(left, top, width, height, color) {
				var self = App.Breakout;

				self.ctx.fillStyle = color;
				self.ctx.fillRect(left, top, width, height);
			},

			strokeRect: function(left, top, width, height, color) {
				var self = App.Breakout;

				self.ctx.strokeStyle = color;
				self.ctx.strokeRect(left, top, width, height);
			},

			textRect: function(text, left, top, color) {
				var self = App.Breakout;

				self.fillStyle = color;
				self.ctx.fillText(text, left, top);
			}
		},

		Events: {
			
		}

	}

	document.addEventListener('DOMContentLoaded', function() {
		App.Breakout.init();
	});

})();