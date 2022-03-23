import { useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  Layout,
  List,
  Row,
  Skeleton,
  Space,
  Typography,
} from "antd";
import { Link, useNavigate } from "react-router-dom";

import { PlusOutlined, StarOutlined } from "@ant-design/icons";

import { SideNav } from "@components";
import { getAllMovies } from "@api";
import InfiniteScroll from "react-infinite-scroll-component";

let page = 1;

export default function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigate();

  useEffect(() => {
    appendData();
  }, []);

  const handleAddToWatchList = (id: any) => {
    console.log("add to watch list: ", id);
  };

  const appendData = () => {
    getAllMovies(page).then((response) => {
      setMoviesList(moviesList.concat(response.data.movies));
      setIsLoading(false);
      page += 1;
    });
  };

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Layout.Sider>
          <SideNav />
        </Layout.Sider>
        <Layout.Content style={{ padding: 50 }}>
          {isLoading ? (
            <Skeleton active></Skeleton>
          ) : (
            <Carousel autoplay style={{ padding: "0 5px" }}>
              {moviesList.slice(0, 3).map((movie) => {
                return (
                  <div id={movie.id}>
                    <div
                      style={{
                        padding: 50,
                        height: "400px",
                        color: "#fff",
                        backgroundPosition: "center",
                        borderRadius: "16px",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url("${movie.background_image}")`,
                        backgroundColor: "#000",
                      }}
                    >
                      <Row gutter={[16, 4]}>
                        <Col span={24}>
                          <Typography.Title
                            level={1}
                            style={{ color: "white" }}
                          >
                            {movie.title}
                          </Typography.Title>
                        </Col>
                        <Col span={24}>
                          {movie.rating}/10 <StarOutlined /> Duration: 104h
                        </Col>
                        <Col span={24}>
                          <Space>
                            {movie.genres.map((genre) => (
                              <Badge
                                count={genre}
                                style={{
                                  backgroundColor: "transparent",
                                }}
                              />
                            ))}
                          </Space>
                        </Col>
                        <Col span={12}>
                          <Typography.Text style={{ color: "whitesmoke" }}>
                            {movie.description_full.substring(0, 250)}
                          </Typography.Text>
                        </Col>
                      </Row>
                      <Row gutter={16} style={{ marginTop: "5%" }}>
                        <Space>
                          <Link
                            to={`/watch/${movie.id}`}
                            style={{
                              background: "#f5222d",
                              margin: 0,
                              padding: 12,
                              borderRadius: 16,
                              boxShadow:
                                "2px 11px 50px 1px rgba(245,34,45,0.61)",
                            }}
                          >
                            Assistir agora
                          </Link>
                          <Button
                            onClick={() => {
                              handleAddToWatchList(movie.id);
                            }}
                            style={{
                              background: "rgba(0,0,0,0.5)",
                              border: "none",
                              height: 43,
                              boxShadow:
                                "2px 11px 50px 1px rgba(245,34,45,0.61)",
                              color: "whitesmoke",
                            }}
                          >
                            <PlusOutlined />
                          </Button>
                        </Space>
                      </Row>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          )}
          <div
            id="scrollableDiv"
            style={{
              height: 400,
              overflow: "auto",
              padding: "0 16px",
              marginTop: 50,
            }}
          >
            <InfiniteScroll
              dataLength={moviesList.length}
              next={appendData}
              hasMore={true}
              loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
              endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
              scrollableTarget="scrollableDiv"
            >
              <List
                dataSource={moviesList}
                grid={{ gutter: 16, column: 5 }}
                renderItem={(item) => (
                  <List.Item>
                    <Card
                      onClick={() => navigation(`/watch/${item.id}`)}
                      hoverable
                      style={{ width: 250 }}
                      cover={
                        <img alt="example" src={item.medium_cover_image} />
                      }
                    >
                      <Card.Meta title={item.title} />
                    </Card>
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </div>
        </Layout.Content>
      </Layout>
    </>
  );
}
