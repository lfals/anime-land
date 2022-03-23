import { HeartFilled, StarFilled, StarTwoTone } from "@ant-design/icons";
import { getMovieDetails } from "@api";
import { SideNav } from "@components";
import {
  Badge,
  Card,
  Col,
  Divider,
  Image,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Watch() {
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id).then((response) => {
      setMovie(response.data.data.movie);
      setIsLoading(false);
      console.log(response.data.data.movie);
    });
  }, []);

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Layout.Sider>
          <SideNav />
        </Layout.Sider>
        {!isLoading ? (
          <Layout.Content
            style={{
              backgroundImage: `url("${movie.background_image_original}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <>
              <Row
                justify="start"
                style={{ padding: 32, color: "white", height: "100%" }}
                align="top"
              >
                <Space size={120}>
                  <Col span={8}>
                    <Image src={movie.large_cover_image} width={400} />
                  </Col>
                  <Col span={24}>
                    <Row>
                      <Col span={24}>
                        <Typography.Title style={{ color: "white" }}>
                          {movie.title_long}
                        </Typography.Title>
                      </Col>
                      <Col span={2}>
                        {movie.rating}/10 <StarFilled />
                      </Col>
                      <Col span={4}>
                        {movie.like_count} <HeartFilled />{" "}
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
                          <Divider />
                        </Space>
                      </Col>
                      <Col span={16}>
                        <Typography.Text style={{ color: "white" }}>
                          {movie.description_full}
                        </Typography.Text>
                      </Col>
                      <Divider />
                      {movie.torrents.map((torrent) => (
                        <Col span={5}>
                          <Card hoverable style={{ width: 200 }}>
                            <Meta
                              title={torrent.quality + " - " + torrent.type}
                              description={torrent.size}
                            />
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Space>
              </Row>
            </>
          </Layout.Content>
        ) : (
          <Layout.Content>
            <>Loadin</>
          </Layout.Content>
        )}
      </Layout>
    </>
  );
}
