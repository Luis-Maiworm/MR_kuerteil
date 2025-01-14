AFRAME.registerSystem('scoresystem', {
    schema: {
        score: { type: 'int', default: 0 }
        
    },

    addScore: function (points) {
        this.data.score += points;
        this.el.emit('update_score', {score: this.data.score})
    },

    minusScore: function (points) {
        this.data.score -= points;
        this.el.emit('update_score', {score: this.data.score})
    },

    getScore: function () {
        return this.data.score;
    },

    resetScore: function () {
        this.data.score = 0;
        this.el.emit('update_score', { score: this.data.score })
    }
})

