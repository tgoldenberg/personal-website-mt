Template.sentence.helpers({
  words: function() {
    var title = this.title;
    var linkTitle = this.linkTitle;
    var link = this.link;
    return this.title.split(" ").map(function(word, idx) {
      return {word: word, linkTitle: linkTitle, link: link, id: idx, last: title.split(" ").length};
    });
  },
  lastWord: function(word) {
    return word.id == word.last-1;
  },
  linkWord: function() {
    return this.link;
  },
  linkTitle: function() {
    return this.linkTitle;
  },
  isLink: function(word) {
    return word.word == word.linkTitle;
  },
  isNotEmpty: function(word) {
    return word != "";
  }
});
