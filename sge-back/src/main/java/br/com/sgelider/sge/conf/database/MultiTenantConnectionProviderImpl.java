package br.com.sgelider.sge.conf.database;

//import java.sql.Connection;
import java.sql.SQLException;

import org.hibernate.engine.jdbc.connections.spi.MultiTenantConnectionProvider;
import org.hibernate.service.spi.ServiceRegistryAwareService;
import org.hibernate.service.spi.ServiceRegistryImplementor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import br.com.sgelider.sge.SgeLiderApplication;

@Component
public class MultiTenantConnectionProviderImpl{

//	private static final long serialVersionUID = 1L;
//	
//	@Autowired
//    private ApplicationContext ctx;
//	
//	@Override
//    public void injectServices(ServiceRegistryImplementor serviceRegistry) {
////        this.logger.debug("- - - - > injectServices(" + serviceRegistry + ") ---> iniciando pool ...");
//        ConnectionPoolManager.init(serviceRegistry);
//    }
//	
//	@Override
//    public Connection getAnyConnection() throws SQLException {
////        this.logger.debug("- - - - > getAnyConnection()");
//        return ConnectionPoolManager.getConnection(SgeLiderApplication.DB_DEFAULT);
//    }
//
//    @Override
//    public Connection getConnection(String tenant) throws SQLException {
////        this.logger.debug("- - - - > getConnection(" + tenant + ")");
//        return ConnectionPoolManager.getConnection(tenant);
//    }
//
//    @Override
//    public void releaseAnyConnection(Connection conn) throws SQLException {
////        this.logger.debug("- - - - > releaseAnyConnection(----- catalog: " + conn.getCatalog() + " ----- schema: " + conn.getSchema() + ") --> close()");
//        conn.close();
//    }
//
//    @Override
//    public void releaseConnection(String tenant, Connection conn) throws SQLException {
////        this.logger.debug("- - - - > releaseConnection(schema:" + tenant + ", connection" + conn + ") --> close()");
//        ConnectionPoolManager.close(tenant, conn);
//    }
//
//    @Override
//    public boolean supportsAggressiveRelease() {
//        return false;
//    }
//
//    @Override
//    public boolean isUnwrappableAs(@SuppressWarnings("rawtypes") Class type) {
//        return false;
//    }
//
//    @Override
//    public <T> T unwrap(Class<T> type) {
//        return null;
//    }
}
