# Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

# Note:

# The same word in the dictionary may be reused multiple times in the segmentation.
# You may assume the dictionary does not contain duplicate words.
# Example 1:

# Input: s = "leetcode", wordDict = ["leet", "code"]
# Output: true
# Explanation: Return true because "leetcode" can be segmented as "leet code".
# Example 2:

# Input: s = "applepenapple", wordDict = ["apple", "pen"]
# Output: true
# Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
#              Note that you are allowed to reuse a dictionary word.
# Example 3:

# Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
# Output: false

def word_break(s, word_dict)
  return true if s.empty?
  table = Array.new(s.length, false)
  table[0] = true
  (0...s.length).each do |start|
    next unless table[start]
    (start...s.length).each do |stop|
      if word_dict.include?(s[start..stop])
        return true if stop == s.length - 1
        table[stop + 1] = true
      end
    end
  end
  false
end

p word_break("leetcode", ["leet", "code"]) # true
p word_break("catsandog", ["cats", "dog", "sand", "and", "cat"]) # false