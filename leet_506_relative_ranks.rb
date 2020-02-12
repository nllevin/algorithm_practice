
# Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

# Example 1:
# Input: [5, 4, 3, 2, 1]
# Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
# Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
# For the left two athletes, you just need to output their relative ranks according to their scores.
# Note:
# N is a positive integer and won't exceed 10,000.
# All the scores of athletes are guaranteed to be unique.

# O(nlogn) time, O(n) space
def find_relative_ranks(nums)
  ranks = Array.new(nums.length)
  medals = {1 => "Gold Medal", 2 => "Silver Medal", 3 => "Bronze Medal"}

  tuples = nums.map.with_index { |num, i| [num, i] }
  tuples.sort! { |tuple1, tuple2| tuple2.first - tuple1.first }
  tuples.each_with_index do |tuple, rank|
    ranks[tuple.last] = medals[rank + 1] || (rank + 1).to_s
  end

  ranks
end

# O(n^2)
# def find_relative_ranks(nums)
#   ranks = Array.new(nums)
#   medals = {1 => "Gold Medal", 2 => "Silver Medal", 3 => "Bronze Medal"}
#   nums.each_with_index do |num1, i|
#     rank = 1
#     nums.each_with_index do |num2, j|
#       next if i == j
#       rank += 1 if num2 > num1
#     end
#     ranks[i] = medals[rank] || rank.to_s
#   end
#   ranks
# end

p find_relative_ranks([5, 4, 3, 2, 1]) # ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]