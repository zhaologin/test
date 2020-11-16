USE xzqa;



UPDATE xzqa_author INNER JOIN (SELECT author_id,COUNT(id) AS counts FROM xzqa_article GROUP BY author_id) AS c ON c.author_id = xzqa_author.id  SET article_number = counts;
